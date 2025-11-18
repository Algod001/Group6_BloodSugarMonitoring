'use client'
import React, { useState } from "react";
import styles from "./Login.module.css"; 
import { Activity, Mail, Lock, ArrowRight } from "lucide-react";
import { supabase } from '../../config/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Authenticate with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      
      if (!authData.user) {
        throw new Error("Login failed, user not found.");
      }

      // 2. Fetch User Role from your custom 'users' table
      // We use the UUID from auth to find the correct user profile 
      const { data: userProfile, error: profileError } = await supabase
        .from('users')
        .select('role, user_name')
        .eq('auth_id', authData.user.id) // Match the auth_id
        .single();

      if (profileError) {
        console.error("Profile Fetch Error:", profileError);
        alert("Login successful, but could not find user profile in database.");
        return;
      }
      
      if (!userProfile) {
         alert("Login successful, but user profile is missing.");
         return;
      }

      // 3. Redirect based on Role
      alert(`Welcome back, ${userProfile.user_name}!`);
      
      // These redirects will 404 until you create the pages
      if (userProfile.role === 'patient') {
        router.push('/patient/dashboard');
      } else if (userProfile.role === 'specialist') {
        router.push('/specialist/dashboard');
      } else if (userProfile.role === 'administrator') {
        router.push('/admin/dashboard');
      } else if (userProfile.role === 'staff') {
        router.push('/staff/dashboard');
      } else {
        router.push('/'); // Fallback
      }

    } catch (error: any) {
      alert("Login Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.formWrapper}>
        <div className={styles.logo}>
          <div className={styles.logoIconWrapper}>
            <div className={styles.logoGlow}></div>
            <div className={styles.logoIcon}>
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className={styles.logoText}>
            <h1>Blood Sugar Monitoring</h1>
            <p>Welcome Back</p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Sign In</h2>
            <p className={styles.formSubtitle}>
              Access your dashboard and manage your health.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  required
                  className={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} />
                <input
                  type="password"
                  required
                  className={styles.input}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              <span>{loading ? "Signing In..." : "Sign In"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account? <a href="/signup" className={styles.footerLink}>Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}