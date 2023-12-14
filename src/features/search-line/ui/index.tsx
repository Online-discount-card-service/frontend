import { Autocomplete, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { CardsContext, SortedCardsContext } from '~/app';

export const SearchLine = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [optionValue, setOptionValue] = useState('');

  const { cards } = useContext(CardsContext);
  const { setSortedCards } = useContext(SortedCardsContext);
  function onChange(e: React.SyntheticEvent) {
    e.currentTarget.textContent && setOptionValue(e.currentTarget.textContent);
    const newCards = cards.filter((card) => {
      return card.card.shop?.name === e.currentTarget.textContent;
    });
    if (newCards.length) {
      return setSortedCards && setSortedCards(newCards);
    } else {
      return setSortedCards && setSortedCards(cards);
    }
  }

  function onInput(e: React.BaseSyntheticEvent) {
    setOptionValue(e.target.value);
    const newCards = cards.filter((card) => {
      return card.card.shop?.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase().trim());
    });

    if (newCards.length) {
      return setSortedCards && setSortedCards(newCards);
    } else {
      return setSortedCards && setSortedCards([]);
    }
  }

  useEffect(() => {
    const optionsArray: string[] = [];
    cards.forEach((card) => {
      if (card.card.shop) {
        if (!optionsArray.includes(card.card.shop.name)) {
          optionsArray.push(card.card.shop.name);
        }
      }
    });

    setOptions(optionsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newCards = cards.filter((card) => {
      return card.card.shop?.name
        .toLowerCase()
        .startsWith(optionValue.toLowerCase().trim());
    });

    if (newCards.length) {
      return setSortedCards && setSortedCards(newCards);
    } else {
      return setSortedCards && setSortedCards(cards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  return (
    <Autocomplete
      fullWidth
      onChange={(e) => onChange(e)}
      options={options && optionValue ? options.map((option) => option) : ['']}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Поиск"
          onChange={(e) => onInput(e)}
          variant="filled"
          sx={{
            height: '2.5rem',
            backgroundColor: 'surface.light',
            borderRadius: '.5rem',
            '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root': {
              backgroundColor: 'transparent',
            },
            '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:before': {
              borderBottom: 'none',
            },
            '& Mui-focused': {
              backgroundColor: 'transparent',
            },
            '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error)::before':
              {
                borderBottom: 'none',
              },

            '& .MuiAutocomplete-inputFocused': {
              left: '50%',
              borderBottom: 'none',
            },

            '& .css-1kkal6p-MuiAutocomplete-root:hover': {
              paddingTop: '0',
              borderBottom: 'none',
            },
            '& .MuiFilledInput-root': {
              paddingTop: '0',
              height: '100%',
              borderRadius: '.5rem',
            },

            '& ..MuiFilledInput-underline ': {
              borderBottom: 'none',
            },
            '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:after  ': {
              borderBottom: 'none',
            },
            '&:focus': {
              borderBottom: 'none',
              outline: 'none',
            },
            '&:hover': {
              borderBottom: 'none',
              outline: 'none',
            },
          }}
        />
      )}
    />
  );
};
