"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[1536],{5622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(4848),s=r(8453),a=r(3514);const o={sidebar_position:7,title:"Data Access",description:"Input and Output of NWM",tags:["NOMADS","NODD","Microsoft Planetary Computer","AWS Open data registry","ESRI"]},i="NWM Data Access",l={id:"products/dataaccess/index",title:"Data Access",description:"Input and Output of NWM",source:"@site/docs/products/dataaccess/index.md",sourceDirName:"products/dataaccess",slug:"/products/dataaccess/",permalink:"/docs/products/dataaccess/",draft:!1,unlisted:!1,editUrl:"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/dataaccess/index.md",tags:[{label:"NOMADS",permalink:"/docs/tags/nomads"},{label:"NODD",permalink:"/docs/tags/nodd"},{label:"Microsoft Planetary Computer",permalink:"/docs/tags/microsoft-planetary-computer"},{label:"AWS Open data registry",permalink:"/docs/tags/aws-open-data-registry"},{label:"ESRI",permalink:"/docs/tags/esri"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Data Access",description:"Input and Output of NWM",tags:["NOMADS","NODD","Microsoft Planetary Computer","AWS Open data registry","ESRI"]},sidebar:"products",previous:{title:"CSES",permalink:"/docs/products/cses/"},next:{title:"nwmurl",permalink:"/docs/products/dataaccess/NWMURL Library"}},c={},d=[{value:"Input and Output Data of the National Water Model",id:"input-and-output-data-of-the-national-water-model",level:2},{value:"Official NOMADS Resource",id:"official-nomads-resource",level:3},{value:"NODD - NOAA Open Data Dissemination Program",id:"nodd---noaa-open-data-dissemination-program",level:3},{value:"AWS",id:"aws",level:4},{value:"Google \u2013 Operational NWM Data",id:"google--operational-nwm-data",level:4},{value:"Azure/Planetary Computer",id:"azureplanetary-computer",level:4},{value:"CIROH Resources",id:"ciroh-resources",level:3},{value:"Other resources",id:"other-resources",level:3},{value:"ESRI Living Atlas",id:"esri-living-atlas",level:4},{value:"Description of WRF-Hydro code:",id:"description-of-wrf-hydro-code",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"nwm-data-access",children:"NWM Data Access"}),"\n",(0,n.jsx)(t.p,{children:'Within the CIROH projects, we encounter a wide range of data resources and data access inquiries. One of the most frequently asked questions is, "How can I obtain access to xyz-resource?". To help with answering that question, we have documented some of the most common data access methods and resources here, with links to additional sites to dive deeper.'}),"\n",(0,n.jsx)(t.h2,{id:"input-and-output-data-of-the-national-water-model",children:"Input and Output Data of the National Water Model"}),"\n",(0,n.jsx)(t.p,{children:"Here, you will find resources that grant access to the input data used and the output data produced by the operational national water model."}),"\n",(0,n.jsx)(t.h3,{id:"official-nomads-resource",children:"Official NOMADS Resource"}),"\n",(0,n.jsx)(t.p,{children:"The official NWM meteorological inputs and hydrology and routing outputs are accessible through both HTTP and FTP. These resources are provided by the National Center for Environmental Prediction (NCEP) at the following locations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["NOMADS - NOAA Operational Model Archive and Distribution System","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm",children:"HTTP"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"ftp://ftpprd.ncep.noaa.gov/pub/data/nccf/com/nwm",children:"FTP"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As of October 24, 2023, these resources include the following directories:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"para_post-processed/    22-Sep-2023 20:37    -   \npost-processed/         02-Nov-2020 14:31    -   \nprod/                   24-Oct-2023 00:18    -   \nv3.0/                   24-Oct-2023 00:18    -  \n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"para_post-processed"}),' directory lacks specific documentation, although the "para" designation suggests it is a "parallel" execution, indicating a candidate production run under testing for operational use. In the post-processed dataset, you will find the following subdirectories:']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://nomads.ncep.noaa.gov/pub/data/nccf/com/nwm/post-processed/",children:"NOMADS post-processed"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"RFC: Outputs filtered down to RFC locations."}),"\n",(0,n.jsx)(t.li,{children:"WMS: Contains re-indexed/reformatted outputs in per-forecast netCDFs suitable for rapid querying and responsive for graph visualizations on the water.noaa.gov/map site."}),"\n",(0,n.jsx)(t.li,{children:"IMAGES: .png-formatted renderings of NWM output for various domains and variables."}),"\n",(0,n.jsx)(t.li,{children:"logs: Logs. :)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"nodd---noaa-open-data-dissemination-program",children:"NODD - NOAA Open Data Dissemination Program"}),"\n",(0,n.jsxs)(t.p,{children:['"The NOAA Open Data Dissemination (NODD) Program provides public access to NOAA\'s open data on commercial cloud platforms through public-private partnerships. These partnerships remove obstacles to public use of NOAA data, help avoid costs and risks associated with federal data access services, and leverage operational public-private partnerships with the cloud computing and information services industries."\n(For more information, visit ',(0,n.jsx)(t.a,{href:"https://www.noaa.gov/information-technology/open-data-dissemination",children:"NODD"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["The NODD datasets made available through several public cloud vendors are an incredible resource for accessing NWM data for research and evaluative purposes. The NWS NODD datasets are listed on ",(0,n.jsx)(t.a,{href:"https://www.noaa.gov/nodd/datasets",children:"this page"})," and include the following:"]}),"\n",(0,n.jsx)(t.h4,{id:"aws",children:"AWS"}),"\n",(0,n.jsx)(t.p,{children:"AWS hosts two repositories as part of their sustainability data initiative."}),"\n",(0,n.jsxs)(t.p,{children:["The first repository contains the operational data (now hosts 4 week rolling collection of all output; it used to only be short range and the registry entry retains the description only for the short_range data ",(0,n.jsx)(t.a,{href:"https://registry.opendata.aws/noaa-nwm-pds/",children:"here"}),"; alternatively, the same resource is described under the sustainability initiative page ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-73iwu7dcfuge2",children:"here"}),".)"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The catalog of AWS-hosted operational NWM data can be browsed ",(0,n.jsx)(t.a,{href:"https://noaa-nwm-pds.s3.amazonaws.com/index.html",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The second (and more useful) AWS repository contains several versions of the retrospective dataset each described on the main page under the open data registry ",(0,n.jsx)(t.a,{href:"https://registry.opendata.aws/nwm-archive/",children:"here"}),".\n(The same information is also on the AWS sustainability initiative webpage ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-g6lcchc7brshwa",children:"here"})," )"]}),"\n",(0,n.jsx)(t.p,{children:"The different catalogs of those [currently] five versions of that resource are linked below:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Two versions of NWM v2.1 retrospective","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["netCDF, ",(0,n.jsx)(t.a,{href:"https://noaa-nwm-retrospective-2-1-pds.s3.amazonaws.com/index.html",children:"here"})]}),"\n",(0,n.jsxs)(t.li,{children:["zarr, ",(0,n.jsx)(t.a,{href:"https://noaa-nwm-retrospective-2-1-zarr-pds.s3.amazonaws.com/index.html",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Two versions of NWM v2.0 retrospective","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["netCDF, ",(0,n.jsx)(t.a,{href:"https://noaa-nwm-retro-v2-0-pds.s3.amazonaws.com/index.html",children:"here"})]}),"\n",(0,n.jsxs)(t.li,{children:["zarr, ",(0,n.jsx)(t.a,{href:"https://noaa-nwm-retro-v2-zarr-pds.s3.amazonaws.com/index.html",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["NWM v1.2 retrospective data","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["netCDF, ",(0,n.jsx)(t.a,{href:"https://nwm-archive.s3.amazonaws.com/index.html",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The AWS retrospective resource is the primary publicly available source for the version 1.0 of the \u201cAORC\u201d Analysis of Record for Calibration dataset, which is a 40-year best-available estimate of most common meteorological parameters required for hydrological modeling. Version 1.1 of the dataset will accompany the release of the NWM model version 3.0 retrospective (or 2.2 version??), hopefully in the next few weeks."}),"\n",(0,n.jsxs)(t.p,{children:["Jupyter notebook instructions for processing NWM Zarr and NetCDF output formats ",(0,n.jsx)(t.a,{href:"https://github.com/CIROH-UA/data_access_example/",children:"here"})]}),"\n",(0,n.jsx)(t.p,{children:"An example of pulling data from the channel output zarr 2.1 archive and writing the results to csv follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"'''\n#install these libraries if they aren't already installed\n!pip install zarr\n!pip install xarray\n!pip install s3fs\n!pip install numpy\n'''\n# Import needed libraries\n\nimport xarray as xr\nimport numpy as np\nimport s3fs\nfrom datetime import datetime, timedelta\n\n# open the zarr store\nurl = \"s3://noaa-nwm-retrospective-2-1-zarr-pds/chrtout.zarr\"\nfs = s3fs.S3FileSystem(anon=True)\nstore = xr.open_zarr(s3fs.S3Map(url, s3=fs))\n\n# Function to get the time series for a specified reach id and and time range\n# then write it out to a csv file.\ndef GetAndWriteTimeSeriesAtReach(reach_id, start_time_index, end_time_index):\n    flows = streamflow_array.where(feature_id_array==reach_id, drop=True)\n    df_flows = flows[start_time_index:end_time_index].to_dataframe()\n    df_flows.to_csv(f'flows_{reach_id}.csv')\n\n# get an xarray array of the various values\ntime_array = store['time']\nfeature_id_array = store['feature_id']\nstreamflow_array = store['streamflow']\n\n# Define the feature IDs to check for\nfeature_ids = [5781221, 5781223, 5781703]\n\n# Specify the start and end times of interest\nstart_time = datetime(2015, 5, 23, 0, 0, 0)\nend_time = datetime(2015, 6, 24, 0, 0, 0)\n\n# Get the indices for the needed dates\nzero_start_time = start_date = datetime(1979, 2, 1, 0, 0, 0)\nstart_time_index = int((start_time - zero_start_time).total_seconds() / 3600)\nend_time_index = int((end_time - zero_start_time).total_seconds() / 3600)\n\nfor reach_id in feature_ids:\n    GetAndWriteTimeSeriesAtReach(reach_id, start_time_index, end_time_index)\n\n'''\nSimple Script for Retrieving Retrospective NWM Data from AWS Store\nDan Ames, 11/17/2023\ndan.ames@byu.edu\n'''\n\n"})}),"\n",(0,n.jsx)(t.h4,{id:"google--operational-nwm-data",children:"Google \u2013 Operational NWM Data"}),"\n",(0,n.jsxs)(t.p,{children:["Google hosts the most complete operational data archive of inputs and outputs from the National Water Model, with nearly every file since August 2018. The Google open data registry provides additional explanations ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/marketplace/product/noaa-public/national-water-model?project=explore-ai-387703",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Operational data can be browsed ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/storage/browser/national-water-model",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Google also hosts a copy of the NWM v1.2 retrospective ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/storage/browser/national-water-model-reanalysis",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Coming soon: Big Query"}),"\n",(0,n.jsx)(t.p,{children:"Efforts are underway to make some of the datasets from the NWM operational and retrospective simulations available on BigQuery for ultra-high-bandwidth access. Stay tuned..."}),"\n",(0,n.jsx)(t.h4,{id:"azureplanetary-computer",children:"Azure/Planetary Computer"}),"\n",(0,n.jsxs)(t.p,{children:["Microsoft hosts the NWM input and output datasets in Azure Blob Storage, associated with the Microsoft Planetary Computer.\n",(0,n.jsx)(t.a,{href:"https://planetarycomputer.microsoft.com/dataset/storage/noaa-nwm",children:"Microsoft Planetary Computer"}),"\nTom Augspurger of Microsoft has a series of notebooks providing examples of how to use this data from his workshop at the first CIROH developers conference.\n",(0,n.jsx)(t.a,{href:"https://github.com/TomAugspurger/noaa-nwm",children:"Tom Augspurger's Notebooks"})]}),"\n",(0,n.jsx)(t.h3,{id:"ciroh-resources",children:"CIROH Resources"}),"\n",(0,n.jsx)(t.p,{children:"More detailed information and example usage will be available soon."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Kerchunk Retro (points to AWS 2.1 NetCDF Retro)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://ciroh-nwm-zarr-retrospective-data-copy.s3.amazonaws.com/index.html",children:"Kerchunk Retro"})," - Forcing complete; model output 2011-2020"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Kerchunk Operational (points to Google assets \u2013 a simple text change can point to AWS short range, if desired)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://ciroh-nwm-zarr-copy.s3.amazonaws.com/index.html",children:"Kerchunk Operational"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"other-resources",children:"Other resources"}),"\n",(0,n.jsx)(t.h4,{id:"esri-living-atlas",children:"ESRI Living Atlas"}),"\n",(0,n.jsxs)(t.p,{children:["ESRI Living Atlas provides a map-enabled version of the NWM output, which can be accessed ",(0,n.jsx)(t.a,{href:"https://www.esri.com/arcgis-blog/products/analytics/analytics/esri-visualizes-noaas-national-water-model/",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"description-of-wrf-hydro-code",children:"Description of WRF-Hydro code:"}),"\n",(0,n.jsxs)(t.p,{children:["A detailed description of various aspects of the WRF-Hydro code, which produces the current NWM, can be found ",(0,n.jsx)(t.a,{href:"https://ral.ucar.edu/sites/default/files/public/projects/wrf_hydro/technical-description-user-guide/wrf-hydro-v5.1.1-technical-description.pdf",children:"here"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(a.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>w});r(6540);var n=r(4164),s=r(4142),a=r(8774),o=r(5846),i=r(6654),l=r(1312),c=r(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=r(4848);function p(e){let{href:t,children:r}=e;return(0,h.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function u(e){let{href:t,icon:r,title:s,description:a}=e;return(0,h.jsxs)(p,{href:t,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),a&&(0,h.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function m(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,h.jsx)(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,h.jsx)(u,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(f,{item:t});case"category":return(0,h.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,h.jsx)(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return(0,h.jsx)(g,{...e});const a=(0,s.d1)(t);return(0,h.jsx)("section",{className:(0,n.A)("row",r),children:a.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(6540),s=r(4586);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);