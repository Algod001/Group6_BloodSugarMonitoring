"use client";
import React from "react";
import styles from "./MainPage.module.css";
import { Activity, Brain, Bell, Users, LineChart, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoIconWrapper}>
              <div className={styles.logoGlow}></div>
              <div className={styles.logoIcon}>
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className={styles.logoText}>
              <h1>Blood Sugar Monitoring</h1>
              <p>AI-Powered Monitoring</p>
            </div>
          </div>
          <button className={styles.loginBtn} onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgGradient}></div>
        <div className={styles.heroBlob1}></div>
        <div className={styles.heroBlob2}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Brain className="w-4 h-4" />
            AI-Powered Health Monitoring
          </div>
          <h2 className={styles.heroTitle}>
            Smart Blood Sugar
            <span className={styles.heroGradientText}>Management</span>
          </h2>
          <p className={styles.heroDescription}>
            A self-reliant and independent system dedicated to monitoring and
            tracking blood sugar levels with AI-driven insights and automated
            alerts.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary} onClick={() => router.push("/signup")}>
              Get Started
            </button>
            <button className={styles.btnSecondary}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          {/* AI Features Card */}
          <div className={styles.featureCard}>
            <div className={styles.featureCardGlow}></div>
            <div className={styles.featureCardContent}>
              <div
                className={`${styles.featureIcon} ${styles.featureIconPurple}`}
              >
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className={styles.featureTitle}>AI-Powered Analysis</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    Analyze blood sugar patterns between normal and abnormal
                    readings
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    Generate personalized recommendations for specific patients
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Detect abnormal patterns automatically</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Patient Features Card */}
          <div className={styles.featureCard}>
            <div className={styles.featureCardGlow}></div>
            <div className={styles.featureCardContent}>
              <div
                className={`${styles.featureIcon} ${styles.featureIconCyan}`}
              >
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className={styles.featureTitle}>Patient Dashboard</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Register, login, and manage your own account</span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    Input, modify, and delete blood sugar readings with details
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Track and view blood sugar records over time</span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    View readings categorized as normal, borderline, or abnormal
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Alert System Card */}
          <div className={styles.featureCard}>
            <div className={styles.featureCardGlow}></div>
            <div className={styles.featureCardContent}>
              <div
                className={`${styles.featureIcon} ${styles.featureIconOrange}`}
              >
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className={styles.featureTitle}>Smart Alerts</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    Automatic alert messages to patients and specialists
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>
                    Triggered when abnormal readings occur more than 3 times per
                    week
                  </span>
                </li>
                <li className={styles.featureListItem}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Email notifications for immediate attention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className={styles.userRoles}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Designed for Everyone</h3>
          <p className={styles.sectionSubtitle}>
            Comprehensive features for all stakeholders in patient care
          </p>
        </div>
        <div className={styles.rolesGrid}>
          <div className={styles.roleCard}>
            <div
              className={`${styles.roleCardGlow} ${styles.roleCardGlowCyan}`}
            ></div>
            <div className={styles.roleCardContent}>
              <Users className={`${styles.roleIcon} ${styles.roleIconCyan}`} />
              <h4 className={styles.roleTitle}>For Patients</h4>
              <p className={styles.roleDescription}>
                Take control of your health with easy-to-use tools for tracking
                blood sugar levels, viewing trends, and receiving personalized
                recommendations.
              </p>
              <div className={styles.roleTags}>
                <span className={`${styles.roleTag} ${styles.roleTagCyan}`}>
                  Self-Management
                </span>
                <span className={`${styles.roleTag} ${styles.roleTagCyan}`}>
                  Historical Data
                </span>
                <span className={`${styles.roleTag} ${styles.roleTagCyan}`}>
                  Email Alerts
                </span>
              </div>
            </div>
          </div>
          <div className={styles.roleCard}>
            <div
              className={`${styles.roleCardGlow} ${styles.roleCardGlowBlue}`}
            ></div>
            <div className={styles.roleCardContent}>
              <Shield className={`${styles.roleIcon} ${styles.roleIconBlue}`} />
              <h4 className={styles.roleTitle}>For Administrators</h4>
              <p className={styles.roleDescription}>
                Manage user accounts, oversee system operations, and ensure
                smooth clinic-wide coordination with centralized data access.
              </p>
              <div className={styles.roleTags}>
                <span className={`${styles.roleTag} ${styles.roleTagBlue}`}>
                  Account Management
                </span>
                <span className={`${styles.roleTag} ${styles.roleTagBlue}`}>
                  System Control
                </span>
                <span className={`${styles.roleTag} ${styles.roleTagBlue}`}>
                  Data Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitsBg}></div>
        <div className={styles.benefitsBlob}></div>
        <div className={styles.benefitsContent}>
          <div className={styles.benefitsIconWrapper}>
            <LineChart className={styles.benefitsIcon} />
          </div>
          <h3 className={styles.benefitsTitle}>
            Centralized, Efficient, and Accurate
          </h3>
          <p className={styles.benefitsDescription}>
            Designed to work independently yet connected to medical records,
            events, and notes. Better efficiency, accuracy, and communication
            within the clinic by centralizing data and extending access based on
            roles.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoIcon}>
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className={styles.footerLogoText}>
              <h1>Blood Sugar Monitoring</h1>
              <p>Blood Sugar Monitoring System</p>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <p className={styles.footerCopyright}>
              © 2025 Blood Sugar Monitoring. All rights reserved.
            </p>
            <p className={styles.footerTagline}>
              Dedicated to helping patients and healthcare providers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}