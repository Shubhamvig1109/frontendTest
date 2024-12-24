// app.tsx or _app.tsx
import '../../styles/globals.css'; // Import global styles
import { AppProps } from 'next/app';
import { store } from '../redux/store'
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pageRoutes from '@/layouts/routing';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()


    return (
        <Fragment>
            {pageRoutes.map((item, index) => {
                if (router.pathname === item.pageName) {

                    return (

                        <Provider store={store} key={index}>
                            <item.Layout>
                                <Component {...pageProps} />
                                <ToastContainer position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light" />
                            </item.Layout>
                        </Provider>
                    )
                }
            })}

        </Fragment>
    )
}

export default MyApp
