import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PagesError } from 'widgets/PagesError';
import { Loader } from 'shared/ui/Loader';

interface IProps {
    children: ReactNode
}

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <PagesError />
                </Suspense>
            );
        }

        return children;
    }
}
