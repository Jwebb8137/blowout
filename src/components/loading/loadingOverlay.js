import React from 'react';
import { LoaderScreen } from 'react-native-ui-lib';

const LoadingOverlay = () => {
  return (
    <LoaderScreen
      overlay
      message="Loading..."
      color="white"
      backgroundColor="black"
    />
  );
};

export default LoadingOverlay;
