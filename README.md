# Document Detective

## An AI Information Retrieval Assistant

This is a simple tool to help journalists or researchers discover information about a large collection of documents by chatting with an AI assistant.

## Usage

1. Upload a set of documents. The app will store embeddings (1 per page) in your vector database.

2. Start chatting with the AI assistant!

3. If you want to save its answer, hit the copy to clipboard button.

The AI will cite its sources, to aid in human fact-checking.

The document embeddings are stored in a database for fast and efficient querying upon later use. So you only need to do the upload step once.

## Configuration

Before using this app, you'll need to get the following API keys and set them in a file named `.env.local`.

- OpenAI API Key
- Supabase URL and Private API Key specific to your database

For creating a database in the correct schema follow the instructions from Langchain JS on Supabase integration. Also create a "documentInfo" table with the following fields:

- name
- created_at
- pages
