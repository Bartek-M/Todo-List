import sys
import subprocess


def setup():
    # Python packages
    subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])

    # NPM packages
    subprocess.run(["npm", "install", "-g", "typescript"], shell=True)
    subprocess.run(["npm", "install"], shell=True)

    # TS package
    subprocess.run(["npm", "run", "build"], shell=True)

    # Database
    subprocess.run([sys.executable, "manage.py", "makemigrations api"])
    subprocess.run([sys.executable, "manage.py", "migrate"])


if __name__ == "__main__":
    setup()
