import { useParams  } from 'react-router-dom';

import '../index.css';
import '../style/ProjectDetails.css';

import data from '../data';

import Project from '../component/Project/Project';
import MarkedTitle from '../component/MarkedTitle';

export default function ProjectDetails() {
  const { projectDetails } = useParams();

  return (
    <div className='container'>
      <div className='titleContainer pt-80 pb-80'>
        <h1 className='title'>{ data[projectDetails].title } <mark className='markedTitle'>{ data[projectDetails].mark }</mark>!</h1>
      </div>

      <div className='projectImgContainer'>
        <Project
          img={ data[projectDetails].img }
          name={ projectDetails }
        />
      </div>

      <div className='infoContainer pt-80 pb-80'>
        <p>{ data[projectDetails].info }</p>
      </div>

      <div className='row pb-80'>
        {(() => {
          let post = [];
          let obj = data[projectDetails].imgs;

          for (let prop in obj ) {
            post.push(
              <div className='screen'>
                <h2 className='pb-40'>
                  <mark className='markedText'>{ prop }</mark>
                </h2>
                <div className='col'>
                  <img src={ obj[prop] } width='100%' />
                </div>
              </div>
            )
          }

          return post;
        })()}
      </div>

      <div className='row'>
        <div className='technologies col'>
          <MarkedTitle
            text='Technologies'
          />
          
          {(() => {
            let post = [];
            let obj = data[projectDetails].technologies;

            for (let prop in obj) {
              post.push(
                <ul>
                  <li>{ prop }
                    <ul>
                      {(() => {
                        let list = [];

                        for (let i = 0; i < obj[prop].length; i++) {
                          list.push(
                            <li>
                              { obj[prop][i] }
                            </li>
                          );
                        }

                        return list;
                      })()}
                    </ul>
                  </li>
                </ul>
              );
            }

            return post;
          })()}
        </div>

        <div className='whereIs col'>
          <MarkedTitle
            text='Where is'
          />

          <div className='row'>
            {(() => {
              let post = [];
              let obj = data[projectDetails].whereIs;

              for (let prop in obj) {
                post.push(
                  <a className='link' href={obj[prop].url} target="_blank">
                    <img src={ obj[prop].img } width='24px'/>
                  </a>
                )
              }

              return post;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}