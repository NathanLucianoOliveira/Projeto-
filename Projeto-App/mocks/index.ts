import { fakerPT_BR as faker } from "@faker-js/faker";

export const grupos = () =>
  faker.helpers.multiple(gerarGrupo, {
    count: faker.number.int({ min: 5, max: 10 }),
  });

function gerarGrupo(): IGrupo {
  return {
    id: faker.string.uuid(),
    nome: faker.company.name(),
    descricao: faker.lorem.sentence({
      max: 10,
      min: 1,
    }),
    imagem: faker.image.urlLoremFlickr({ category: "food" }),
    quantidadeMaxima: faker.number.int({
      max: 150,
    }),
    dataRevelacao: faker.date.future(),
  };
}

export interface IGrupo {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  quantidadeMaxima: number;
  dataRevelacao: Date;
}
