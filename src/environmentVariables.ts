interface EnvVariables {
  AUTH_URL: string;
  BACKEND_API_URL: string;
}

const validateEnvironmentVariables = (): EnvVariables => {
  const authUrl = import.meta.env.VITE_AUTH_URL;
  const backendUrl = import.meta.env.VITE_BACKEND_API_URL;

  if (!authUrl) {
    throw new Error("VITE_AUTH_URL is undefined");
  }

  if (!backendUrl) {
    throw new Error("VITE_BACKEND_API_URL is undefined");
  }

  return {
    AUTH_URL: authUrl,
    BACKEND_API_URL: backendUrl,
  };
};

const ENVIRONMENT_VARIABLES = validateEnvironmentVariables();
export default ENVIRONMENT_VARIABLES;
