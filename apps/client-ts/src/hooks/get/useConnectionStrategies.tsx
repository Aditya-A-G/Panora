import config from '@/lib/config';
import { useQuery } from '@tanstack/react-query';
import { connection_strategies as ConnectionStrategies } from 'api';
import Cookies from 'js-cookie';

const useConnectionStrategies = () => {
  return useQuery({
    queryKey: ['connection-strategies'], 
    queryFn: async (): Promise<ConnectionStrategies[]> => {
      const response = await fetch(`${config.API_URL}/connections-strategies/getConnectionStrategiesForProject`,
      {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${Cookies.get('access_token')}`,
        },
      });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    }
  });
};
export default useConnectionStrategies;
