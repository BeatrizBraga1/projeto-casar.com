
import React, { useState, useEffect } from 'react';
import { FaCircle, FaRegHeart, FaHeart } from 'react-icons/fa6';

interface RepositoryProps {
  repositorio: {
    idrepositorio: number;
    titulo: string;
    descricao_repositorio: string;
    linguagem: string;
    data_cadastro: string;
  } | null;
  onToggleFavorito?: (idrepositorio: number) => void;
}

const obterCorLinguagem = (linguagem: string) => {
  switch (linguagem) {
    case 'Typescript':
      return '#3276C6';
    case 'HTML':
      return '#FF4343';
    case 'Javascript':
      return '#F5DA79';
    default:
      return '#000';
  }
};

const IndividualRepository: React.FC<RepositoryProps> = ({ repositorio, onToggleFavorito }) => {
  const [favorito, setFavorito] = useState(false);

  const formatarData = (data: string | undefined) => {
    if (!data) return 'Data não disponível';
    const [dia, mes, ano] = data.split('/');
    const dataFormatada = new Date(`${ano}-${mes}-${dia}`);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(dataFormatada);
  };

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavorito(favoritos.some((fav: any) => fav?.idrepositorio === repositorio?.idrepositorio));
  }, [repositorio]);

  const toggleFavorito = () => {
    if (!repositorio) return;

    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    let novosFavoritos;

    if (favorito) {
      novosFavoritos = favoritos.filter((fav: any) => fav?.idrepositorio !== repositorio.idrepositorio);
    } else {
      novosFavoritos = [...favoritos, repositorio];
    }

    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavorito(!favorito);

    if (onToggleFavorito) {
      onToggleFavorito(repositorio.idrepositorio);
    }
  };


  if (!repositorio) return null;

  return (
    <div className="flex-row justify-between border border-gray-300 p-[15px] sm:p-[10px] mt-[15px] mb-[15px] rounded min-h-[130px]">
      <div className="items-center justify-center">
        <div className="flex justify-between pb-[10px]">
          <div className="content-center">
            <h2>{repositorio.titulo}</h2>
          </div>
          <div>
            <div onClick={toggleFavorito} className="cursor-pointer">
            {favorito ? (
              <FaHeart className="text-[40px] text-p-color border border-p-color rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" />
            ) : (
              <FaRegHeart className="text-[40px] placeholder bg-bg-white rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" />
            )}
            </div>
          </div>
        </div>
        <p>{repositorio.descricao_repositorio}</p>
        <div className="sm:flex pt-[10px] pb-[10px] items-center">
          <div className="flex">
            <FaCircle style={{ color: obterCorLinguagem(repositorio.linguagem) }} />
            <p className="text-[12px] pl-[5px]">{repositorio.linguagem}</p>
          </div>
          <div>
            <p className="text-[12px] pl-0 sm:pl-[25px] pt-[8px] sm:pt-0">Updated on {formatarData(repositorio.data_cadastro)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualRepository;

