module.exports = {
  name: 'Ksenia Portu',
  title: 'Software engineer, Mathematician, Haskell/Nix admirer ',
  facts: {
    'Website': '<a href="https://ksenia-portu.com"><i class="fa fa-home fact-icon"></i>ksenia-portu.com</a>',    
    'Linkedin': `<a href="https://www.linkedin.com/in/ksenia-portu"><i class="fa-brands fa-linkedin fact-icon"></i>Ksenia Portu</a>`,
    'Github': `<a href="https://github.com/ksenia-portu"><i class="fa-brands fa-github fact-icon"></i>Ksenia Portu</a>`,    
    'Email': '<a href="mailto:ksenia.portu@proton.me"><i class="fa fa-envelope fact-icon"></i>ksenia.portu@gmail.com</a>'
  },
  skills: [
    ['Mathematics', 100],    
    ['Haskell', 100],
    ['Functional programming', 100],    
    ['Teaching', 100],      
    ['NixOS', 20],
    ['Linux', 100],    
    ['Blockchain', 70],
    ['Pi calculus', 80],
    ['Petri nets', 80],    
    ['Linear Logic', 80], 
    ['Session types', 50],  
    ['Git', 100],
    ['Cryptography', 20],    
    ['Devops', 20],  
    ['Kubernetes', 50], 
    ['Research and Software Development', 50],  
    ['Category theory', 30],      
    ['Dependent types', 10],      
    ['Recursion-schemes', 10],        
    ['Linear algebra', 50],      
    ['Statistics', 50],     
    ['Machine learning', 50],                  
    ['SQL', 100],    
    ['Python', 100],                       
  ], 
  positions: [   
    {
      title: 'Haskell Software Engineer',
      project: 'payment system', 
      period: 'Oct 2021 - Aug 2022 · 11 mos',
      skills: ['Haskell', 'PostgreSQL'],
      devops_skills: ['docker', 'docker-compose', 'nix', 'knative'],
      contents: `
      **About used stack:** 
      **project1**

      --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      web framework               Servant
      database                    PostgreSQL
      API                         [PostgREST](https://postgrest.org/en/stable/) for hadling requests (PostgREST turns a PostgreSQL database into a RESTful API)
      message broker              [*RabbitMQ*]{.spurious-link target="RabbitMQ"}
      in-memory data store        [Redis](https://redis.io/)
      metrics, events, and logs   [prometheus](https://prometheus.io/), [grafana](https://grafana.com/), [co-log](https://hackage.haskell.org/package/co-log)
      deploy, CI                  [docker](https://www.docker.com/), [kubernetes](https://kubernetes.io/), [aws](https://aws.amazon.com/) , [circleci](https://circleci.com/), [argo cd](https://argo-cd.readthedocs.io/en/stable/)
      --------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
      **project2**
    
      ---------------- ------------------------------------------------
      web framework    Servant
      database         PostgreSQL
      message broker   Kafka
      devops           Knative (serverless) , Kubernetes, Docker, Nix
      ---------------- ------------------------------------------------
    
      **About tasks:** Backend development, Architecture, Research (Event-Driven-Design, Serverless)
      `          
    },
    {
      title: 'Haskell Software Engineer',
      project: 'recruitement web platform', 
      period: 'Mar 2021 - Aug 2021 · 6 mos',
      skills: ['Haskell', 'PostgreSQL'],
      devops_skills: ['docker', 'docker-compose'],
      contents: `
      **About used stack:** 
      **haskell:** Yesod PostgreSQL

      **About tasks:** Backend development         
      `            
    },
    {
      title: 'Haskell Software Engineer',
      project: 'develop DSL',
      period: 'Apr 2019 - Feb 2020 ·10 mos',   
      skills: ['Haskell', 'Nix package manager', 'compiler', 'lambda calculus', 'Parsing', 'Type inference', 'Bidirectional typechecker', 'Evaluation'],     
      contents: `
      **About used stack:** 
      **haskell:** 
      megaparsec

      **About tasks:** 
      Research and development
   
      `      
    },    
    {
      title: 'Blockchain Haskell developer',
      project: 'new generation blockchain',
      period: 'Oct 2017 - Jan 2019 · 1 yr 4 mos',     
      skills: ['Haskell', 'cryptography', 'blockchain consensus algorithms', 'p2p network', 'routing', 'smart-contracts', 'RocksDB'],
      devops_skills: ['rancher', 'docker'],
      contents: `
      # Description

      **About the project:** 
      I have worked as Blockchain Haskell developer on
      new blockchain generation project. The framework part of the project is
      open-sourced ​https://github.com/Enecuum/Node and it has decent
      documentation and explanations about architecture and possibilities:
      [Building network actors with Enecuum Node Framework](https://gist.github.com/graninas/9beb8df5d88dda5fa21c47ce9bcb0e16)
      [Why Haskell?](https://enqblockchain.medium.com/why-haskell-eacb087f3adb)
      [Enecuum. Framework possibilities](https://enqblockchain.medium.com/enecuum-framework-possibilities-d4fa49c3ea40)
      [Enecuum.Framework Possibilities, Part 2](https://enqblockchain.medium.com/enecuum-framework-possibilities-part-2-7c8ff65c1c4e)
      
      **About used stack:** 
      **haskell:** 
      Free monads (eDSLs) 
      STM (Software Transactional Memory) 
      Lenses 
      Key Value database - RocksDB
      
      **common:**
      
      -   DevOps: rancher, docker
      -   Metrics: Grafana+Graphite+StatsD
      -   Project tracking: Redmine
      -   Knowledge database: Confluence
      
      **About tasks:** 
      Research and development in such fields as
      
      -  blockchain related: 
      -- blockchain consensus algorithms (PoW, PoS, PoA) 
      -- p2p network, routing -- tests (integrational, functional) 
      -- smart-contracts, petri-nets, pi-calculus
      -  common application dev related: 
      -- config management 
      -- cli 
      -- logging
      -- Packages, dependency management via stack. 
      -- parallel computations and processes      
      `
    },        
  ],
  experience: [
    {
      header: 'University Lecturer',
      company: 'Branch of Ural Federal University',
      skills: ['teaching'],
      period: 'Sep 2020 - Jun 2021 - full university year(two semesters)',
      contents: `
      I taught such disciplines as
      - Information System's design
      - High-level programming languages (Haskell)
      - Databases
      - Semantic networks

      I curated numerous students' programming projects.
`
    }    
  ]
};






