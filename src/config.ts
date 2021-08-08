/*
Local'de çalışırken bu url açılarak editlenebilir ve aşağıdaki config parametresi commente alınabilir. 
!!!!config.ts dosyasını commit etmeyin. !!!!!

const config = {
  server: {
    URL: "https://hesabimapi-dev.aykargo.com.tr/api/v1/"
  },
};
*/

const config = {
  server: {
    URL: "##{apiurl}##"
  },
};

const lastConfig = {
  ...config
}

export default lastConfig;
