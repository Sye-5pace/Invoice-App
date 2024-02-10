import React,{ useState} from 'react'
import { Layout, ConfigProvider,Divider,Space } from 'antd'
import { useSelector } from 'react-redux'
import ThemeSwitch from './components/ThemeSwitch'
import Invoices from './views/Invoices'
import './index.css'
import Profile from './assets/image-avatar.jpg'
import Logo from './assets/logo.svg'

const { Sider } = Layout;

const App: React.FC = () => {
    const theme = useSelector((state: any) => state.theme.currentTheme )
    
    

    return(
        <ConfigProvider >
            
            <Layout  className={`w-full min-h-screen p-0 m-0 border-box flex ${ theme === 'light' ? '!bg-whisper' : '!bg-miragedp '} transition`}>
                <Sider className='!bg-mirage  rounded-tr-[1.25rem] rounded-br-[1.25rem]' width="6.4375rem">
                    <Space direction="vertical" size={410}>
                        <div className='bg-cornflowerblue w-full h-[6.4375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] flex'>
                            <div className="h-[3.21875rem] w-[6.4375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-heliotrope self-end">
                                <img src={Logo} alt="logo"  className="w-[2.5rem] absolute top-[2.125rem] left-[2.0625rem]"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ThemeSwitch />
                            <Divider type="horizontal" style={{ backgroundColor: '#494E6E'}}/>
                            <img src={Profile} alt="profile-pic" className="w-[2.5rem] rounded-full"/>
                        </div>
                    </Space>
                </Sider>
                <Invoices />
            </Layout>
        </ConfigProvider>
    )
}


export default App