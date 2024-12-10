const sendEmail = async ()=>{
    console.log('send email has been invoked');
    const name = document.getElementById('nameOfUser').value;
    const email = document.getElementById('emailOfUser').value;
    const message = document.getElementById('messageOfUser').value;
    const bodyObject = {name:name,email:email,message:message}
    try{
        const response = await fetch('https://ie5dg187sf.execute-api.us-east-1.amazonaws.com/views/sendemail',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)        
        })
        if(response.ok){
            alert('Your Email has been sent');
            document.getElementById('contactForm').reset();
        }else{
            document.getElementById('contactFormSubmissionResponse').innerText = 'Failed to send. Try again later'
        }
    }catch(err){
        document.getElementById('contactFormSubmissionResponse').innerText = 'Failed to send. Try again later'
        console.log(err);
    }
    
}