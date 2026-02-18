import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const styles = {
        container: {
            backgroundColor: '#f9fafb', // Light gray background for the whole page
            color: '#1f2937', // Dark gray text for readability
            fontFamily: '"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            minHeight: '100vh',
            padding: '40px 20px',
            lineHeight: '1.6',
        },
        contentWrapper: {
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '60px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
        },
        header: {
            marginBottom: '50px',
            borderBottom: '2px solid #f3f4f6',
            paddingBottom: '30px',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '15px',
            letterSpacing: '-0.02em',
        },
        lastUpdated: {
            fontSize: '0.9rem',
            color: '#6b7280',
            fontStyle: 'italic',
        },
        section: {
            marginBottom: '40px',
        },
        sectionTitle: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '15px',
            marginTop: '40px',
            borderLeft: '4px solid #3b82f6',
            paddingLeft: '15px',
        },
        paragraph: {
            marginBottom: '18px',
            fontSize: '1rem',
            color: '#374151',
        },
        list: {
            listStyleType: 'disc',
            paddingLeft: '25px',
            marginBottom: '20px',
            color: '#374151',
        },
        listItem: {
            marginBottom: '8px',
        },
        link: {
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: '500',
        },
        disclaimerBox: {
            backgroundColor: '#fff1f2',
            borderLeft: '4px solid #be123c',
            color: '#881337',
            padding: '20px',
            borderRadius: '4px',
            marginBottom: '30px',
            fontSize: '0.95rem',
        },
        backLink: {
            display: 'inline-block',
            marginBottom: '20px',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.2s',
            cursor: 'pointer',
        }

    };

    useEffect(() => {
        // Save original styles
        const originalBodyStyle = document.body.style.cssText;
        const originalHtmlStyle = document.documentElement.style.cssText;

        // Apply override styles to reset the global dark mode/scroll settings
        document.body.style.height = 'auto';
        document.body.style.backgroundColor = '#f9fafb';
        document.body.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';

        return () => {
            // Restore original styles
            document.body.style.cssText = originalBodyStyle;
            document.documentElement.style.cssText = originalHtmlStyle;
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <Link to="/" style={styles.backLink}>← Back to Home</Link>

                <header style={styles.header}>
                    <h1 style={styles.title}>Terms and Conditions</h1>
                    <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
                </header>

                <section style={styles.section}>
                    <div style={styles.disclaimerBox}>
                        <strong>CRITICAL NOTICE - PLEASE READ:</strong> These Terms and Conditions constitute a legally binding agreement between you and Hikity. We reserve the strict right to update, modify, or replace these Terms at any time without prior specific notice to you. It is your responsibility to check this page periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
                    </div>

                    <p style={styles.paragraph}>
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Hikity website and service (the "Service") operated by Hikity ("us", "we", or "our").
                    </p>
                    <p style={styles.paragraph}>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>
                    <p style={styles.paragraph}>
                        <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong>
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. Accounts and Registration</h2>
                    <p style={styles.paragraph}>
                        To access certain features of the Service, you may be required to register for an account. When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p style={styles.paragraph}>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                    </p>
                    <p style={styles.paragraph}>
                        You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Intellectual Property Rights</h2>
                    <p style={styles.paragraph}>
                        The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Hikity and its licensors. The Service is protected by copyright, trademark, and other laws of both the specific jurisdiction and foreign countries.
                    </p>
                    <p style={styles.paragraph}>
                        Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hikity. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. User Content</h2>
                    <p style={styles.paragraph}>
                        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
                    </p>
                    <p style={styles.paragraph}>
                        By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>4. Prohibited Uses</h2>
                    <p style={styles.paragraph}>
                        You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>In any way that violates any applicable national or international law or regulation.</li>
                        <li style={styles.listItem}>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                        <li style={styles.listItem}>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                        <li style={styles.listItem}>To impersonate or attempt to impersonate Hikity, a Hikity employee, another user, or any other person or entity.</li>
                        <li style={styles.listItem}>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Hikity or users of the Service or expose them to liability.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Links To Other Web Sites</h2>
                    <p style={styles.paragraph}>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Hikity.
                    </p>
                    <p style={styles.paragraph}>
                        Hikity has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Hikity shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    </p>
                    <p style={styles.paragraph}>
                        We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>6. Termination</h2>
                    <p style={styles.paragraph}>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p style={styles.paragraph}>
                        Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>7. Indemnification</h2>
                    <p style={styles.paragraph}>
                        You agree to defend, indemnify and hold harmless Hikity and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>8. Limitation of Liability</h2>
                    <p style={styles.paragraph}>
                        In no event shall Hikity, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>9. Disclaimer</h2>
                    <p style={styles.paragraph}>
                        Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                    </p>
                    <p style={styles.paragraph}>
                        Hikity its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>10. Governing Law</h2>
                    <p style={styles.paragraph}>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                    <p style={styles.paragraph}>
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>11. Changes to Terms</h2>
                    <p style={styles.paragraph}>
                        <strong>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</strong> If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p style={styles.paragraph}>
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>12. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about these Terms, please contact us.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsAndConditions;
