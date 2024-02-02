import {useState} from 'react'

export const useFetching = (callback, dispatch) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async() => {
        try {
            setIsLoading(true)
            await callback()
        } catch (err) {
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return [isLoading, error, fetching]
}