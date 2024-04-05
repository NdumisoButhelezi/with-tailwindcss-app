import { SessionProvider } from "../../componets/SessionProvider";
import SideBar from "../../componets/SideBar";
import {getServerSession} from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "../../componets/Login";
import "./globals.css";



export default async function RootLayout({
  children,

  }: {
    children: React.ReactNode;
  }) {
    const session = await getServerSession(authOptions);

    console.log(session);
    return( 
      <html>
        <head />
        <body>
          <SessionProvider session={session}>
            {!session ? (
              <Login />
            ):( 
              <div className="flex">
                <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                  <SideBar /> 
              </div> 
            {/* ClientProvider - Notification */}

            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
            )}
          
          </SessionProvider>
        </body>
      </html>
    );
  }

