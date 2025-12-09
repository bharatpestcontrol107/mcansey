'use client'
import { FC, useState } from 'react';
import { FaCode, FaDatabase, FaMobileAlt, FaCloud, FaCog } from 'react-icons/fa';
import Image from 'next/image';


const techOptions = [
  { name: 'Frontend Programming Languages', key: 'frontend', icon: <FaCode /> },
  { name: 'Backend Programming Languages', key: 'backend', icon: <FaCog /> },
  { name: 'Mobile App', key: 'mobile', icon: <FaMobileAlt /> },
  { name: 'Big Data', key: 'bigdata', icon: <FaDatabase /> },
  { name: 'Databases', key: 'databases', icon: <FaDatabase /> },
  { name: 'Cloud', key: 'cloud', icon: <FaCloud /> },
  { name: 'DevOps', key: 'devops', icon: <FaCloud /> },
  { name: 'AI', key: 'ai', icon: <FaCloud /> },
];


type TechCategory = 'frontend' | 'backend' | 'mobile' | 'bigdata' | 'databases' | 'cloud' | 'devops' | 'ai';

const languages: Record<TechCategory, { name: string; icon: string }[]> = {
  frontend: [
    { name: 'CSS', icon: '/TechCapa/css-logo.svg' },
    { name: 'Javascript', icon: '/TechCapa/javascript-lg.svg' },
    { name: 'React', icon: '/TechCapa/react-logo-icon.svg' },
    { name: 'HTML', icon: '/TechCapa/html-logo.svg' },
    { name: 'Ember', icon: '/TechCapa/ember-logo.svg' },
    { name: 'Next.js', icon: '/TechCapa/nextlogo.svg' },
    { name: 'Meteor', icon: '/TechCapa/meteor.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/TechCapa/node_js.svg' },
    { name: 'Dot-Net', icon: '/TechCapa/backend/dot-net-lang.svg' },
    { name: 'Java', icon: '/TechCapa/backend/java-tech-icon.svg' },
    { name: 'Php', icon: '/TechCapa/backend/php-logo.svg' },
    { name: 'Python', icon: '/TechCapa/backend/python-tech-icon.svg' },
    { name: 'Go-lang', icon: '/TechCapa/backend/go_lang.svg' },
    
  ],
  mobile : [
    { name: 'React Native', icon: '/TechCapa/react-logo-icon.svg' },
    { name: 'Android', icon: '/TechCapa/mobile/mobile-android.svg' },
    { name: 'Ionic', icon: '/TechCapa/mobile/mobile-ionic.svg' },
    { name: 'Flutter', icon: '/TechCapa/mobile/mobile-futter.svg' },
    { name: 'Ios', icon: '/TechCapa/mobile/mobile-ios.svg' },
    { name: 'Pwa', icon: '/TechCapa/mobile/mobile-pwa-logo.svg' },
    { name: 'React', icon: '/TechCapa/mobile/mobile-react.svg' },
    { name: 'Xamarin', icon: '/TechCapa/mobile/mobile-xamarin.svg' },
    { name: 'Cordova', icon: '/TechCapa/mobile/mobile-cordova.svg' },
  ],
  bigdata: [
    { name: 'Amazon', icon: '/TechCapa/hadoop-logo.svg' },
    { name: 'Apache', icon: '/TechCapa/bigdata/apache-storm-tech-icon.svg' },
    { name: 'Azure', icon: '/TechCapa/bigdata/azure-event-hub-tech-icon.svg' },
    { name: 'Flink', icon: '/TechCapa/bigdata/flink-tech-icon.svg' },
    { name: 'Kafka', icon: '/TechCapa/bigdata/kafka-streams-tech-icon.svg' },
    { name: 'Rabbitmq', icon: '/TechCapa/bigdata/rabbitmq-tech-icon.svg' },
    { name: 'Spark', icon: '/TechCapa/bigdata/spark-streaming-tech-icon.svg' },
    { name: 'Stream', icon: '/TechCapa/bigdata/stream-analytics-tech-icon.svg' },
  ],
  databases: [
    { name: 'Cassandra', icon: '/TechCapa/database/cassandra-tech-icon.svg' },
    { name: 'Hbase', icon: '/TechCapa/database/hbase-tech-icon.svg' },
    { name: 'Hive', icon: '/TechCapa/database/hive-tech-icon.svg' },
    { name: 'Mongodb', icon: '/TechCapa/database/mongodb-tech-icon.svg' },
    { name: 'Mysql', icon: '/TechCapa/database/mysql-tech-icon.svg' },
    { name: 'Mysql-server', icon: '/TechCapa/database/ms-sql-server-tech-icon.svg' },
    { name: 'Nifi', icon: '/TechCapa/database/nifi-tech-icon.svg' },
    { name: 'Oracle', icon: '/TechCapa/database/oracle-tech-icon.svg' },
    { name: 'Postgre', icon: '/TechCapa/database/postgre-sql-tech-icon.svg' },
  ],
  cloud: [
    { name: 'Documentdb', icon: '/TechCapa/cloud/amazon-documentdb.svg' },
    { name: 'Dynomidb', icon: '/TechCapa/cloud/amazon-dynamodb.svg' },
    { name: 'Amazon-rds', icon: '/TechCapa/cloud/amazon-rds.svg' },
    { name: 'Amazon Redshift', icon: '/TechCapa/cloud/amazon-redshift.svg' },
    { name: 'AWS-Elsticache', icon: '/TechCapa/cloud/aws-elasticache.svg' },
    { name: 'Azure-Blob', icon: '/TechCapa/cloud/azure-blob-storage.svg' },
    { name: 'Azure-Cosmos', icon: '/TechCapa/cloud/azure-cosmos-DB.svg' },
    { name: 'Azure-Data', icon: '/TechCapa/cloud/azure-data-lake.svg' },
    { name: 'Azure-Sql', icon: '/TechCapa/cloud/azure-sql-database.svg' },
    { name: 'Azure-Synapse', icon: '/TechCapa/cloud/azure-synapse-analytics.svg' },
    { name: 'Google-Cloud', icon: '/TechCapa/cloud/google-cloud-datastore-1.svg' },
    { name: 'Google-Cloud-Sql', icon: '/TechCapa/cloud/google-cloud-sql-1.svg' },

  ],
  devops: [
    { name: 'Ansible', icon: '/TechCapa/DevOps/ansible.svg' },
    { name: 'AWS', icon: '/TechCapa/DevOps/aws-developer-tools.svg' },
    { name: 'Azure', icon: '/TechCapa/DevOps/azure-devops.svg' },
    { name: 'Chef', icon: '/TechCapa/DevOps/chef-logo.svg' },
    { name: 'Docker', icon: '/TechCapa/DevOps/docker-logo.svg' },
    { name: 'Ci-cd', icon: '/TechCapa/DevOps/ci-cd-logo.svg' },
    { name: 'Data-Dog', icon: '/TechCapa/DevOps/data-dog-logo.svg' },
    { name: 'Docker-Logo', icon: '/TechCapa/DevOps/data-dog-logo.svg' },
    { name: 'Elsticsearch', icon: '/TechCapa/DevOps/elasticsearch.svg' },
    { name: 'Gitlab', icon: '/TechCapa/DevOps/gitlab.svg' },
    { name: 'Grafana', icon: '/TechCapa/DevOps/grafana-logo.svg' },
    { name: 'Kubernetes', icon: '/TechCapa/DevOps/kubernetes.svg' },
  ],
  ai: [
    { name: 'Google-tech', icon: '/TechCapa/AI/google-tech-icon.svg' },
    { name: 'Grok-tech', icon: '/TechCapa/AI/grok-tech-icon.svg' },
    { name: 'hugging-face', icon: '/TechCapa/AI/hugging-face-icon.svg' },
    { name: 'Meta-tech', icon: '/TechCapa/AI/meta-tech-icon.svg' },
    { name: 'Mistral', icon: '/TechCapa/AI/mistral-ai-tech-icon.svg' },
    { name: 'Open-ai', icon: '/TechCapa/AI/open-ai-tech-icon.svg' }, 
    { name: 'Vertex', icon: '/TechCapa/AI/vertex-ai-tech-icon.svg' },
  ],
};

const TechCapabilities: FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('frontend'); 

  const handleTechOptionClick = (key: TechCategory) => {
    setActiveCategory(key);
  };

  return (
    <div className="flex flex-col items-center bg-white text-white py-4 xl:py-16 px-4">
      <h2 className="text-xl  md:text-xl  xl:text-2xl font-semibold mb-8 text-center md:text-left md:w-[85%] w-full text-black">
        Tech Capabilities Driving Digital Transformation for Our Clients
      </h2>

      <div className="flex flex-col md:flex-row w-full md:w-[85%] bg-gray-200 rounded-lg overflow-hidden ">
       
        <div className="bg-blue-700 text-white w-full md:w-1/2 p-4 md:p-6 flex-shrink-0">
          <div className="flex flex-col space-y-4 overflow-y-auto h-80 md:h-[500px] xl:h-auto pr-3 scrollbar-thin scrollbar-thumb-blue-500">
            {techOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleTechOptionClick(option.key as TechCategory)}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  activeCategory === option.key ? 'bg-blue-500' : 'bg-blue-700 hover:bg-blue-600'
                }`}
              >
                <div className="text-xl mr-3">{option.icon}</div>
                <span className="text-sm md:text-base">{option.name}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex-1 w-full md:w-1/2 p-4 md:p-6 grid grid-cols-2 md:grid-cols-2 gap-4 h-28 bg-gray-100">
          {languages[activeCategory].map((lang, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-black rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Image src={lang.icon} alt={lang.name} className="h-8 w-8 mr-3" width={32} height={32} />
              <span className="text-sm md:text-base text-white">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCapabilities;
