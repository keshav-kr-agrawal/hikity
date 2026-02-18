import React, { useEffect } from 'react';

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
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '60px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
        },
        header: {
            marginBottom: '40px',
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '20px',
        },
        title: {
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '10px',
        },
        lastUpdated: {
            fontSize: '0.875rem',
            color: '#6b7280',
        },
        section: {
            marginBottom: '30px',
        },
        sectionTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '10px',
            marginTop: '30px',
        },
        paragraph: {
            marginBottom: '15px',
            fontSize: '1rem',
        },
        list: {
            listStyleType: 'disc',
            paddingLeft: '20px',
            marginBottom: '15px',
        },
        listItem: {
            marginBottom: '5px',
        },
        link: {
            color: '#2563eb',
            textDecoration: 'none',
        },
        disclaimerBox: {
            backgroundColor: '#fee2e2',
            border: '1px solid #ef4444',
            color: '#b91c1c',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '0.9rem'
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
                <header style={styles.header}>
                    <h1 style={styles.title}>Terms and Conditions</h1>
                    <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
                </header>

                <section style={styles.section}>
                    <div style={styles.disclaimerBox}>
                        <strong>IMPORTANT NOTICE:</strong> We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Service following any changes constitutes your acceptance of the new Terms.
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
                    <h2 style={styles.sectionTitle}>1. Accounts</h2>
                    <p style={styles.paragraph}>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p style={styles.paragraph}>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                    </p>
                    <p style={styles.paragraph}>
                        You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Intellectual Property</h2>
                    <p style={styles.paragraph}>
                        The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Hikity and its licensors. The Service is protected by copyright, trademark, and other laws of both the specific jurisdiction and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hikity.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. Links To Other Web Sites</h2>
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
                    <h2 style={styles.sectionTitle}>4. Termination</h2>
                    <p style={styles.paragraph}>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p style={styles.paragraph}>
                        Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Limitation of Liability</h2>
                    <p style={styles.paragraph}>
                        In no event shall Hikity, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>6. Disclaimer</h2>
                    <p style={styles.paragraph}>
                        Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                    </p>
                    <p style={styles.paragraph}>
                        Hikity its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>7. Governing Law</h2>
                    <p style={styles.paragraph}>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                    <p style={styles.paragraph}>
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>8. Changes to Terms</h2>
                    <p style={styles.paragraph}>
                        <strong>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</strong> If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p style={styles.paragraph}>
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>9. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about these Terms, please contact us.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsAndConditions;
