import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelloWorldPage } from './pages/hello-world';
import { EnhancedHelloPage } from './pages/enhanced-hello';
import { SimpleLayout } from './components/layout/simple-layout';

export const App = () => {
    return (
        <Router>
            <SimpleLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/hello" replace />} />
                    <Route path="/hello" element={<HelloWorldPage />} />
                    <Route path="/enhanced" element={<EnhancedHelloPage />} />
                </Routes>
            </SimpleLayout>
        </Router>
    );
};
