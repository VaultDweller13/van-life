import { type SetURLSearchParams } from 'react-router-dom';

import { useCallback } from 'react';
import { TypeButton } from '..';
import styles from './Filters.module.css';

const filterOptions = ['simple', 'luxury', 'rugged'] as const;

type FilterOptions = (typeof filterOptions)[number] | null;
type FiltersProps = {
  filterType: string | null;
  setSearchParams: SetURLSearchParams;
};

export const Filters = ({ filterType, setSearchParams }: FiltersProps) => {
  const handleSearchParams = useCallback(
    (option: FilterOptions) => {
      setSearchParams((prevSearchParams) => {
        if (option === null) {
          prevSearchParams.delete('type');
        } else {
          prevSearchParams.set('type', option);
        }
        return prevSearchParams;
      });
    },
    [setSearchParams]
  );

  const filterButtons = filterOptions.map((option, index) => (
    <TypeButton
      key={index}
      type={option}
      isActive={filterType === option}
      onClick={() => handleSearchParams(option)}
    >
      {option}
    </TypeButton>
  ));

  return (
    <section className={styles.filters}>
      <div className={styles['filter-buttons']}>{filterButtons}</div>
      {filterType && (
        <button
          className={styles['button-clear']}
          onClick={() => handleSearchParams(null)}
        >
          Clear filters
        </button>
      )}
    </section>
  );
};
