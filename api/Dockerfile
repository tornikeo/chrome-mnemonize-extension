FROM python:3.10
WORKDIR /workdir
RUN apt-get update && apt-get -y install git 
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY app /workdir/app
ENV OPENAI_API_KEY=
ENV PORT=8080
CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT} --reload