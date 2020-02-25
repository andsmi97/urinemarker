import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContentStyles } from './styles';

export default function FAQContent() {
  const classes = useContentStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={classes.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Какова точность полученного анализа?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Сегодня общий анализ мочи сдается с помощью специальных
            тест-полосок. Лаборант окунает эту тест-полоску в мочу и с помощью
            анализатора, который сравнивает цвета сенсорных зон тест-полоски с
            эталонами и тем выдает результат. В нашем случае все происходит
            абсолютно так же, но в роли лаборанта Вы сами, а в роли анализатора
            Ваш собственный смартфон, который с помощью алгоритмов машинного
            обучения и компьютерного зрения проводит сравнение цветов с той же
            точностью, что и лабораторный анализатор!
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className={classes.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Какие показатели мочи можно проанализировать с помощью нашего
            набора?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <p>
            Как и в лабораторном общем анализе мочи, с помощью нашего набора
            можно сделать полу-количественный анализ на содержание следующих
            компонентов в моче:
          </p>
          <ul className={classes.list}>
            <li>Лейкоциты</li>
            <li>Нитриты</li>
            <li>Уробилиноген</li>
            <li>Белок </li>
            <li>Кетоны </li>
            <li>Билирубин</li>
            <li>Глюкоза</li>
            <li>Аскорбиновая кислота</li>
          </ul>
          <p>А также определить следующие физические параметры мочи:</p>
          <ul className={classes.list}>
            <li> рН(показатель кислотности) </li>
            <li> Плотность </li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
