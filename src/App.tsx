import React,{useState} from 'react'
import { Layout, ConfigProvider,Divider,Space } from 'antd'
import { MoonFilled,SunFilled }  from '@ant-design/icons'
import './index.css'
import Profile from './assets/image-avatar.jpg'
import Logo from './assets/logo.svg'

const { Sider,Content } = Layout;

const App: React.FC = () => {
    const [isDarkMode, SetDarkMode] = useState<boolean>(false);
    const toggleTheme = ():void => {
        SetDarkMode(!isDarkMode)
        const theme: 'light' | 'dark' =  isDarkMode ? 'dark' : 'light' 
        console.log(theme)
    }

    return(
        <ConfigProvider 
            theme={{
                
            }}>
            <Layout  className="w-full min-h-screen p-0 m-0 border-box flex !bg-whisper">
                <Sider className='!bg-mirage  rounded-tr-[1.25rem] rounded-br-[1.25rem]' width="6.4375rem">
                    <Space direction="vertical" size={410}>
                        <div className='bg-cornflowerblue w-full h-[6.4375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] flex'>
                            <div className="h-[3.21875rem] w-[6.4375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-heliotrope self-end">
                                <img src={Logo} alt="logo"  className="w-[2.5rem] absolute top-[2.125rem] left-[2.0625rem]"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="">
                                <button  onClick={toggleTheme}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` ${isDarkMode ? 'hidden' : 'block'} w-[1.25rem] animate-wiggle fill-silvercove hover:fill-selago`}>
                                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button  onClick={toggleTheme}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` ${isDarkMode ? 'block' : 'hidden'} w-[1.25rem] animate-wiggle fill-silvercove hover:fill-selago`}>
                                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                    </svg>
                                </button>                               
                            </div>
                            <Divider type="horizontal" style={{ backgroundColor: '#494E6E'}}/>
                            <img src={Profile} alt="profile-pic" className="w-[2.5rem] rounded-full"/>
                        </div>
                    </Space>
                </Sider>
                <main className="border w-[45.625rem] mx-auto mt-[4.5rem]">
                    Main
                    
                </main>
            </Layout>
        </ConfigProvider>
    )
}


export default App