import { useSelector } from 'react-redux';
import { Header } from '../header/header';
import styles from './app.module.scss';
import { booksSelector } from '../../store/books/books.selector';
import { BookCard } from '../book-card/book-card';

export const App = () => {
  const books = useSelector(booksSelector);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            cover={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            category={book.volumeInfo.categories?.[0]}
            authors={book.volumeInfo.authors}
          />
        ))}
        {/* <BookCard
          cover={coverSrc}
          category="Computers"
          title="Node.js Разработка серверных веб-приложений на JavaScript"
          authors={['Дэвид Хэррон']}
        />
        <BookCard
          cover={coverSrc}
          category="Computers"
          title="Node.js "
          authors={['Дэвид Хэррон']}
        /> */}
        {/*        <BookInfo
          categories={['art', 'history']}
          authors={['Davey Jones', 'Jack Sparrow']}
          title="Pirates of the Caribbean: Dead Men Tell No Tales. Some time after"
          description={`The complete vCAT printed reference: knowledge, tools, 
          and validated designs for building high-value vCloud® solutions T
          he vCloud Architecture Toolkit (vCAT) brings together validated designs, 
          tools, and knowledge for architecting, implementing, operating, and consuming 
          modern vCloud infrastructure based on the Software Defined Data Center (SDDC). 
          vCAT has already helped hundreds of VMware customers succeed with vCloud. Now, 
          pioneering VMware architect John Arrasjid has integrated essential vCAT information 
          into a definitive printed guide, adding even more context and examples for successful
           planning and deployment. To do so, Arrasjid has distilled contributions from more 
           than 100 VMware architects, consultants, administrators, engineers, project managers,
            and other technical leaders. VMware vCloud Architecture Toolkit (vCAT) is your 
            omplete roadmap for using virtualization to simplify data centers and related IT 
            infrastructure. You’ll find up-to-the-minute, field-proven insights for addressing 
            a wide spectrum of challenges–from availability to interoperability, security 
            to business continuity. Coverage includes vCAT design guidelines and patterns 
            for efficiently architecting, operating, and consuming VMware cloud computing 
            solutions Software-defined datacenter services for storage, networking, 
            security, and availability People, process, and technology issues associated
             with effective vCloud operation and maintenance Efficient service consumption: consumption
              models, service catalogs, vApps, and service provider interactions Workflows to coordinate 
              and automate task sequences, which extend beyond vCloud VMware vCloud Director® Server
               Resource Kit software tools Advanced “cloud bursting” and autoscaling techniques to 
               dynamically leverage additional computing resources Planning and management of 
               scapacity, security, compliance, and disaster recovery`}
        /> */}
      </main>
    </div>
  );
};
