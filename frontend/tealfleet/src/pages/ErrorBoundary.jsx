// React components
import * as React from 'react';

// Chakra-UI components 
import {
    Box,
    Text
} from '@chakra-ui/react';

function ErrorBoundary() {

    return (
        <Box>  
            <Text 
            align={'center'}
            marginTop={'60px'}>
                Something went wrong... 
            </Text>
        </Box>
    )
}

export default ErrorBoundary; 