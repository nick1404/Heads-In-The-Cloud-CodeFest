import logging
import azure.functions as func
import smtplib
from email.mime.multipart import MIMEMultipart 
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()

app = func.FunctionApp()
sender_email = 'mykyta.misiiuk@gmail.com'
receiver_email = 'nmgyrt646@gmail.com'
password = os.environ["PASS"]

def send_email():
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = "Attention: John Doe has not checked out of appointment" 
    body = f"Dear Safeguarding Manager,\n\nThis is an automated email to let you know that one of your worker John Doe has been out on an appointment with a customer for 30 minutes and has not checked out yet.\nYou can contact them using the Safeguarding Portal link below:\n\nhttp://localhost:7071/api/http_trigger"

    msg.attach(MIMEText(body, 'plain')) 
    text = msg.as_string()

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, text)


@app.route(route="http_trigger", auth_level=func.AuthLevel.ANONYMOUS)
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    logging.info(password)
    
    send_email()
    return func.HttpResponse(f"Email to your Safeguarding Manager sent out successfully.")