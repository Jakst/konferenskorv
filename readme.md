# WIKI
Hennings och Jakobs sättauppkubernetespoddarguide

Innan du börjar, installera följande verktyg:

* [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts)
* [Kubernetes CLI]
* [Helm]


## Autentisera dig mot GCP & Kubernetes
**GCP**
```bash
gcloud init
```

Välj cloud project `rational-armor-141515`

Svara nej på om du vill konfigurera Google Compute Engine.

**Kubernetes**

```
gcloud container clusters get-credentials konferens --zone europe-west3-b --project rational-armor-141515
```

## Öppna kubernetes dashboard
Kör kommando `kubectl proxy` navigera till [http://localhost:8001/ui](http://localhost:8001/ui).

Surfa runt lite för att titta vad som körs.

