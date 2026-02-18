import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const styles = {
        container: {
            backgroundColor: '#f9fafb',
            color: '#1f2937',
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
            borderLeft: '4px solid #3b82f6', // Revert to friendly blue
            paddingLeft: '15px',
            textTransform: 'uppercase',
        },
        paragraph: {
            marginBottom: '18px',
            fontSize: '1rem',
            color: '#374151',
            textAlign: 'justify',
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
        // Removed redDisclaimerBox
        capsText: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            color: '#111827'
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
        const originalBodyStyle = document.body.style.cssText;
        const originalHtmlStyle = document.documentElement.style.cssText;
        document.body.style.height = 'auto';
        document.body.style.backgroundColor = '#f9fafb';
        document.body.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
        document.documentElement.style.overflow = 'auto';
        return () => {
            document.body.style.cssText = originalBodyStyle;
            document.documentElement.style.cssText = originalHtmlStyle;
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <Link to="/" style={styles.backLink}>← Back to Home</Link>

                <header style={styles.header}>
                    <h1 style={styles.title}>TERMS OF SERVICE</h1>
                    <p style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()} | Effective Immediately</p>
                </header>

                <section style={styles.section}>
                    <p style={styles.paragraph}>
                        These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "You") and Hikity ("Company", "We", "Us"). By accessing or using the Hikity website, services, or any associated content (collectively, the "Service"), you agree to be bound by these Terms and our Privacy Policy.
                    </p>
                    <p style={styles.paragraph}>
                        Please note that these Terms contain provisions that govern how claims you and we have against each other are resolved (see Section 4 "Dispute Resolution"). These provisions will, with limited exception, require you to submit claims you have against us to binding and final arbitration on an individual basis, not as a plaintiff or class member in any class, group or representative action or proceeding.
                    </p>
                    <p style={styles.paragraph}>
                        <strong>We reserve the right to modify, replace, or update these Terms at any time without prior notice.</strong> Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. It is your sole responsibility to check this page periodically for updates.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. DISCLAIMER OF WARRANTIES ("AS-IS")</h2>
                    <p style={styles.paragraph} style={styles.capsText}>
                        THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, HIKITY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                    <p style={styles.paragraph} style={styles.capsText}>
                        WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU USE THE SERVICE AT YOUR OWN SOLE RISK.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. LIMITATION OF LIABILITY</h2>
                    <p style={styles.paragraph} style={styles.capsText}>
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HIKITY, ITS AFFILIATES, OPERATORS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.
                    </p>
                    <p style={styles.paragraph} style={styles.capsText}>
                        UNDER NO CIRCUMSTANCES WILL HIKITY BE RESPONSIBLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING, TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN.
                    </p>
                    <p style={styles.paragraph} style={styles.capsText}>
                        <strong>MAXIMUM LIABILITY CAP:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HIKITY'S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO HIKITY IN THE DIRECTLY PRECEDING ONE (1) MONTH PERIOD, OR (B) FIFTY US DOLLARS (USD $50.00). THIS LIMITATION APPLES REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. INDEMNIFICATION</h2>
                    <p style={styles.paragraph}>
                        You agree to defend, indemnify, and hold harmless Hikity and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Service; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your content caused damage to a third party. This defense and indemnification obligation will survive these Terms and your use of the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>4. DISPUTE RESOLUTION</h2>
                    <p style={styles.paragraph}>
                        <strong>Binding Arbitration.</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, or the use of the Service (collectively, "Disputes") shall be resolved <strong>exclusively by binding arbitration</strong>, rather than in court.
                    </p>
                    <p style={styles.paragraph}>
                        <strong>Class Action Waiver.</strong> You agree that arbitration shall take place on an individual basis. <strong>Class arbitrations and class actions are not permitted.</strong> You are giving up the right to commence or participate in a class action or other representative proceeding. Further, unless both you and Hikity agree otherwise, the arbitrator may not consolidate more than one person's claims with your claims, and may not otherwise preside over any form of a representative or class proceeding.
                    </p>
                    <p style={styles.paragraph}>
                        The arbitration shall be conducted in a location determined solely by Hikity, in accordance with the rules of arbitration chosen by Hikity. The arbitrator's decision shall be final and binding.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. TAX AND LEGAL COMPLIANCE</h2>
                    <p style={styles.paragraph}>
                        You are solely responsible for determining your own tax liabilities and compliance with all applicable laws. Hikity makes no representation regarding the tax implications of any transactions or services. Hikity operates as a private digital entity and does not warrant compliance with specific regional tax registrations or bureaucratic requirements unless explicitly stated. You acknowledge that you use the service at your own risk regarding regulatory compliance.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>6. SEVERABILITY AND WAIVER</h2>
                    <p style={styles.paragraph}>
                        If any provision of these Terms is held to be invalid or unenforceable, such provision will be struck and the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>7. ENTIRE AGREEMENT</h2>
                    <p style={styles.paragraph}>
                        These Terms constitute the entire agreement between you and Hikity regarding our Service, and supersede and replace any prior agreements, oral or written, we might have had between us regarding the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>8. CONTACT</h2>
                    <p style={styles.paragraph}>
                        Legal correspondence must be sent to: contact@hikity.xyz
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsAndConditions;
