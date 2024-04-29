# Todo List - Documentation

## Folder Structure
```
backend/            
    api/        API logic
    todo-list/  Django configuration
docs/               
frontend/          
    assets/     Static files (Bundled JS, CSS, Icons, Images)
    src/        Frontend logic
    templates/  HTML template
scripts/            
```

## Commands
Installation
```bash
pip install -r requirements.txt
npm install -g typescript
npm install
```

TS package
```bash
npm run dev
npm run build
```

Database setup
```bash
python manage.py makemigrations api
python manage.py migrate
```