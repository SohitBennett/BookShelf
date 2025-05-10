# # from fastapi import FastAPI, Request, Form
# # from fastapi.responses import HTMLResponse
# # from fastapi.templating import Jinja2Templates
# # import pickle
# # import numpy as np

# # app = FastAPI()

# # # Load the saved models
# # popular_df = pickle.load(open('popular.pkl', 'rb'))
# # pt = pickle.load(open('pt.pkl', 'rb'))
# # books = pickle.load(open('books.pkl', 'rb'))
# # similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

# # templates = Jinja2Templates(directory="templates")

# # @app.get("/", response_class=HTMLResponse)
# # async def index(request: Request):
# #     return templates.TemplateResponse("index.html", {
# #         "request": request,
# #         "book_name": list(popular_df['Book-Title'].values),
# #         "author": list(popular_df['Book-Author'].values),
# #         "image": list(popular_df['Image-URL-M'].values),
# #         "votes": list(popular_df['num_ratings'].values),
# #         "rating": list(popular_df['avg_rating'].values)
# #     })

# # @app.get("/recommend", response_class=HTMLResponse)
# # async def recommend_ui(request: Request):
# #     return templates.TemplateResponse("recommend.html", {"request": request})

# # @app.post("/recommend_books", response_class=HTMLResponse)
# # async def recommend_books(request: Request, user_input: str = Form(...)):
# #     index = np.where(pt.index == user_input)[0][0]
# #     similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

# #     data = []
# #     for i in similar_items:
# #         item = []
# #         temp_df = books[books['Book-Title'] == pt.index[i[0]]]
# #         item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
# #         item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
# #         item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))
# #         data.append(item)

# #     return templates.TemplateResponse("recommend.html", {"request": request, "data": data})

# # if __name__ == "__main__":
# #     import uvicorn
# #     uvicorn.run(app, host="0.0.0.0", port=8000)




# from fastapi import FastAPI, Form
# from fastapi.middleware.cors import CORSMiddleware
# import pickle
# import numpy as np

# app = FastAPI()

# # Add CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # React app's URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load the pickled data
# popular_df = pickle.load(open('popular.pkl', 'rb'))
# pt = pickle.load(open('pt.pkl', 'rb'))
# books = pickle.load(open('books.pkl', 'rb'))
# similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the book recommendation API"}

# @app.post("/api/recommend_books")
# def recommend_books(user_input: str = Form(...)):
#     try:
#         index = np.where(pt.index == user_input)[0][0]
#         similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

#         data = []
#         for i in similar_items:
#             item = []
#             temp_df = books[books['Book-Title'] == pt.index[i[0]]]
#             item.append(temp_df.drop_duplicates('Book-Title')['Book-Title'].values[0])
#             item.append(temp_df.drop_duplicates('Book-Title')['Book-Author'].values[0])
#             item.append(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values[0])

#             data.append({
#                 "title": item[0],
#                 "author": item[1],
#                 "image": item[2]
#             })

#         return data
#     except IndexError:
#         return {"error": "Book not found"}
#     except Exception as e:
#         return {"error": str(e)}

# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host='0.0.0.0', port=8000)


# from fastapi import FastAPI, Form
# from fastapi.middleware.cors import CORSMiddleware
# import pickle
# import numpy as np

# app = FastAPI()

# # Add CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # React app's URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load the pickled data
# popular_df = pickle.load(open('popular.pkl', 'rb'))
# pt = pickle.load(open('pt.pkl', 'rb'))
# books = pickle.load(open('books.pkl', 'rb'))
# similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the book recommendation API"}

# @app.post("/api/recommend_books")
# def recommend_books(user_input: str = Form(...)):
#     try:
#         index = np.where(pt.index == user_input)[0][0]
#         similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

#         recommended_titles = []
#         for i in similar_items:
#             temp_df = books[books['Book-Title'] == pt.index[i[0]]]
#             recommended_titles.append(temp_df.drop_duplicates('Book-Title')['Book-Title'].values[0])

#         return recommended_titles

#     except IndexError:
#         return {"error": "Book not found"}
#     except Exception as e:
#         return {"error": str(e)}

# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host='0.0.0.0', port=8000)
