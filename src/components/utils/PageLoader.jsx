import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Configure style
NProgress.configure({
    showSpinner: false,     // <-- ENABLE SPINNER
    trickleSpeed: 100,
    minimum: 0.1,
})

const PageLoader = () => {
    const location = useLocation()

    useEffect(() => {
        NProgress.start()

        const timer = setTimeout(() => {
            NProgress.done()
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [location.pathname])

    return null
}

export default PageLoader
