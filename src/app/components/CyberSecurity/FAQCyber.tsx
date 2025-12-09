"use client"
import React from 'react';
import CommonFAQ from '../common/CommonFAQ';
const faqs = [
  {
    question: "What is cyber security? ",
    answer: (
      <span>
        Cyber security refers to the protection of internet-connected systems, networks, and data from cyber threats such as hacking, data breaches, and malware.



      </span>
    ),
  },
  {
    question: "Why is cyber security important? ",
    answer: (
      <span>
        Cyber security is essential to protect your sensitive data, prevent financial losses, safeguard your reputation, and maintain business continuity.

      </span>
    ),
  },
  {
    question: "How do you protect against cyber threats?",
    answer: (
      <span>
        We use a combination of firewalls, encryption, malware protection, threat intelligence, and monitoring tools to detect and defend against cyber threats.



      </span>
    ),
  },
  {
    question: "What types of businesses need cyber security? ",
    answer: (
      <span>
       All businesses, regardless of size or industry, need cyber security to protect their data, customers, and reputation from cyber threats.


      </span>
    ),
  },
  {
    question: "What is a vulnerability assessment? ",
    answer: (
      <span>
       A vulnerability assessment is a process of identifying weaknesses in your IT infrastructure that could potentially be exploited by attackers.




      </span>
    ),
  },
  {
    question: "What is penetration testing? ",
    answer: (
      <span>
        Penetration testing simulates a cyber attack to identify vulnerabilities in your network and systems before malicious hackers can exploit them.



      </span>
    ),
  },
  {
    question: "How often should we update our cyber security?",
    answer: (
      <span>
      Cyber security should be continuously updated to address new and evolving threats. Regular assessments and updates are recommended.

      </span>
    ),
  },
  {
    question: "What is incident response?",
    answer: (
      <span>
       Incident response refers to the process of managing and addressing a cyber security breach, minimizing its impact, and recovering from it.
      </span>
    ),
  },
  {
    question: " How can I protect my business from cyber attacks?",
    answer: (
      <span>
       By implementing strong firewalls, encryption, regular security audits, employee training, and continuous monitoring, you can significantly reduce the risk of cyber attacks.
      </span>
    ),
  },
  {
    question: "  Are cloud services secure?",
    answer: (
      <span>
      Cloud services can be secure if the appropriate security measures such as encryption, access control, and regular monitoring are implemented to protect your data.
      </span>
    ),
  },
];
const FAQCyber = () => {
  return <CommonFAQ  faqs={faqs} />;
};

export default FAQCyber;