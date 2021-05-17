React frontend and Flask/SQLite backend application to maintain a list of universities.

---

#### How to run
## Using Docker
1. Install Docker Desktop and start it. Test it by typing `docker` in a shell
2. Run `make build`
   
## Don't have Docker
For backend -
1. pip3 install -r flask_api/requirements.txt 
2. FLASK_APP=flask_api/app.py flask run

For frontend - 
1. npm install 
2. npm start
   
## Accessing frontend and backend
3. Frontend runs can be accessed at [http://127.0.0.1:3000](http://127.0.0.1:3000)
4. Backend server can be accessed at [http://0.0.0.0:5000/universities](http://0.0.0.0:5000/universities)

### TO DO:
Issues to be resolved/Future enhancements:

1. React:
    - Update doesn't refresh automatically.
    - It needs user to change focus on each of attributes before Update button can be clicked.
2. Search endpoint can be triggered via backend and also, filter can be provided, e.g. `http:0.0.0.0:5000/universities/search?name=<university_name>&sort_by=<column_filter>`
3. To make GUI more elegant and to build search with filter and pagination in frontend.

### INFO:
A fully functional CRUD project that deals with university data.

## Author: Pritesh L Jakhotia
