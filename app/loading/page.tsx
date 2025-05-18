'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const texts = [
    'authenticating',
    'fetching Data',
    'Setting Up dashboard',
];

export default function Page() {
    const [step, setStep] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (step < texts.length) {
            const timer = setTimeout(() => setStep(step + 1), 1800);
            return () => clearTimeout(timer);
        } else {
            // Redirect after last text
            router.replace('/dashboard');
        }
    }, [step, router]);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                src="/72pro.jpg"
                alt="Loading"
                width={96}
                height={96}
                style={{ marginBottom: 32 }}
                priority
                className="rounded-[30px]"
            />
            <div className="loader" style={{ marginBottom: 12, width: 320 }} />
            <div style={{ height: 22, position: 'relative', width: 320 }}>
                {texts.map((text, idx) => (
                    <span
                        key={text}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            opacity: step === idx ? 1 : 0,
                            transition: 'opacity 0.6s',
                            color: '#18181b',
                            fontSize: 12,
                            letterSpacing: 1,
                            textAlign: 'center'
                        }}
                    >
                        {text}
                    </span>
                ))}
            </div>
            <style>{`
                .loader {
                    width: 100%;
                    height: 4.8px;
                    display: inline-block;
                    position: relative;
                    background: rgba(24, 24, 27, 0.15);
                    overflow: hidden;
                }
                .loader::after {
                    content: '';
                    box-sizing: border-box;
                    width: 0;
                    height: 4.8px;
                    background: #18181b;
                    position: absolute;
                    top: 0;
                    left: 0;
                    animation: animFw 10s linear infinite;
                }
                @keyframes animFw {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
