'use client';

import Link from "next/link";
import Image from 'next/image';
import LogoPicapau from '@/assets/logorsv.svg';

import { UserAuthForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <>
      <div className="container relative h-screen md:flex md:flex-row lg:grid lg:max-w-full lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-6">
            <div className="flex flex-col w-12">
              <Image src={LogoPicapau} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="lg:p-8 h-screen flex items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center"></div>
            <div className='flex flex-col space-y-2 text-left'>
				<h1 className='text-2xl font-semibold tracking-tight'>Reset</h1>
				<p className='text-sm text-muted-foreground'>
					Enter your email and password below <br />
					to log into your account
				</p>
            </div>
            <UserAuthForm />
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-sm text-muted-foreground">
                Esqueceu sua Senha?{" "}
                <Link href="/reset-password">Clique aqui</Link>
              </p>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-sm text-muted-foreground">
                user: admin@email.com <br />
                pass: admin123
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
