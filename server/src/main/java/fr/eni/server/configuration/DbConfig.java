//package fr.eni.server.configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
//import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
//
//import javax.sql.DataSource;
//
//@Configuration
//public class DbConfig {
//    @Bean
//    DataSource getDataSource() {
//        return new EmbeddedDatabaseBuilder()
//                .setType(EmbeddedDatabaseType.H2)
//                .addScript("sql/create.sql").build();
//    }
//}
