# Todo List
Fullstack **todo list** website written in **Python** and **TypeScript**. Robust backend is supplied by **Django**. **ReactTS** handles frontend with addition of **Bootstrap** styles. Clients can create their own, personal accounts with multiple todo lists inside. Use **Todo-List** to keep track of whatever you have to do and keep your life organized.

> If you find any bugs, feel free to create a new **issue** in this repository.

## Requirements
- Python 3.8 or above
- Node.js 16 or above

## Setup 
Install all dependencies
```bash
python -r requirements.txt
npm install -g typescript
npm install
```
Build JS package
```bash
npm run build
```

Setup Database
```bash
python manage.py makemigrations api
python manage.py migrate
```

> NOTE: This app needs `.env` configuration file. Using `.env.example`, create `.env` file in the main directory. Without this, server may not work correctly.
>
> If you want to run a **development** version run `npm run dev` instead.

## License
NOT FOR COMMERCIAL USE 

> If you intend to use any of my code for commercial use please contact me and get my permission.