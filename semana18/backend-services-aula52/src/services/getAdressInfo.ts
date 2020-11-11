import axios from "axios";

const URL_ADRESS = "https://viacep.com.br/ws";

type Adress = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
};

export async function getAdressInfo (cep: string): Promise<Adress> {
    const result = await axios.get(`${URL_ADRESS}/${cep}/json/`);

    return {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    };
};