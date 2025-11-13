package com.example.portfolioBackend.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(String name, String email, String subject, String message) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom("bhagyalakshan1999@gmail.com");
        mail.setTo("bhagyalakshan1999@gmail.com"); // your inbox
        mail.setSubject("📩 New Contact Message from Portfolio: " + subject);

        String formattedMessage = """
                ======================================
                New Contact Message from Portfolio
                ======================================

                Name    : %s
                Email   : %s
                Subject : %s

                Message:
                %s

                --------------------------------------
                This message was sent from your portfolio contact form.
                """.formatted(name, email, subject, message);

        mail.setText(formattedMessage);
        mailSender.send(mail);
    }
}
