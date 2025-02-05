from fastapi import FastAPI
from pydantic import BaseModel
import mysql.connector
from langgraph import Graph, Node
import openai

# Setup OpenAI API (if using GPT-3 or similar LLM)
openai.api_key = 'your-openai-api-key'

app = FastAPI()

class Query(BaseModel):
    user_query: str

class FetchProductDataNode(Node):
    def run(self, query):
        # Fetch relevant product data from MySQL
        connection = mysql.connector.connect(
            host="localhost", user="root", database="product_db"
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute(f"SELECT * FROM products WHERE name LIKE '%{query}%'")
        result = cursor.fetchall()
        cursor.close()
        connection.close()
        return result

class SummarizeNode(Node):
    def run(self, product_data):
        # Summarize using GPT-3 or other LLM
        summary = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"Summarize the following product details: {product_data}",
            max_tokens=100
        )
        return summary.choices[0].text.strip()

@app.post("/query")
async def handle_query(query: Query):
    graph = Graph()
    fetch_node = FetchProductDataNode()
    summarize_node = SummarizeNode()

    # Run LangGraph workflow
    product_data = fetch_node.run(query.user_query)
    summary = summarize_node.run(product_data)

    return {"response": summary}
