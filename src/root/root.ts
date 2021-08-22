// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from '../store/GitHubStore/GitHubStore';

const root = () => {
  const gitHubStore = new GitHubStore();

  const EXAMPLE_ORGANIZATION = 'ktsstudio';

  gitHubStore.getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
  }).then(result => {
    console.log('result', result); // в консоли появится список репозиториев в ktsstudio
  })
}

export default root;

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
