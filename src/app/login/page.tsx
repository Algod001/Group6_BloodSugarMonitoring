import React from "react";
import styles from "./Login.module.css";
import { Activity, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.formWrapper}>
        {/* Logo */}
        <div className={styles.logo}>
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

        {/* Form Container */}
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Create Account</h2>
            <p className={styles.formSubtitle}>
              Join Blood Sugar Monitoring to start monitoring your blood sugar levels with AI-driven insights and automated alerts.
            </p>
          </div>

          <form className={styles.form}>
            {/* Full Name Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name
              </label>
              <div className={styles.inputWrapper}>
                <User className={styles.inputIcon} />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} />
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className={styles.inputGroup}>
              <label htmlFor="role" className={styles.label}>
                Account Type
              </label>
              <select id="role" className={styles.select}>
                <option value="">Select your role</option>
                <option value="patient">Patient</option>
                <option value="specialist">Specialist</option>
                <option value="clinic-staff">Clinic Staff</option>
                <option value="administrator">Administrator</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" className={styles.checkbox} />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                I agree to the{" "}
                <a href="#" className={styles.link}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Sign In Link */}
          <div className={styles.footer}>
            <p className={styles.footerText}>
              Already have an account?{" "}
              <a href="#" className={styles.footerLink}>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
