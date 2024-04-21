import { fakerPT_BR as faker } from "@faker-js/faker";

export function grupos() {
  return faker.helpers.multiple(gerarGrupo, {
    count: faker.number.int({ min: 5, max: 10 }),
  });
}

export function gerarGrupo(): IGrupo {
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

export function convites() {
  return faker.helpers.multiple(gerarConvite, {
    count: faker.number.int({ min: 10, max: 20 }),
  });
}

export function gerarConvite(): IConvite {
  return {
    id: faker.string.uuid(),
    codigo: faker.number.int({ min: 11111, max: 9999999 }).toString(),
    grupoId: faker.string.uuid(),
  };
}

export interface IConvite {
  id: string;
  codigo: string;
  grupoId: string;
  grupo?: IGrupo;
}

export interface IGrupo {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  quantidadeMaxima: number;
  dataRevelacao: Date;
}
