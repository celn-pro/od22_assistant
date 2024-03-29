import { Inter } from "next/font/google";
import "./globals.css";

import {NavBar} from '../components'

import { SelectedCourseProvider, SelectedNotesReviewProvider, SelectedModuleProvider} from "../contexts";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Od22 Assistant",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-[100vh] bg-white ">
          <SelectedCourseProvider>
            <SelectedModuleProvider>
              <SelectedNotesReviewProvider>
                <NavBar />
                {children}
              </SelectedNotesReviewProvider>
            </SelectedModuleProvider>
          </SelectedCourseProvider>
        </div>
      </body>
    </html>
  );
}
