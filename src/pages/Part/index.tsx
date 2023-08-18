import { PageContainer } from '@ant-design/pro-components';
import DualAxisLineChart from '@/components/DualAxisLineChart'

const HomePage: React.FC = () => {

  return (
    <PageContainer ghost>
        <DualAxisLineChart />
    </PageContainer>
  );
};

export default HomePage;
