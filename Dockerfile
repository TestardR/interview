# Stage 1: Watchman
ARG WATCHMAN_VERSION=4.9.0
FROM jotadrilo/watchman:$WATCHMAN_VERSION AS watchman


FROM python:3.9
# This is to print directly to stdout instead of buffering output
ENV PYTHONUNBUFFERED 1

RUN pip install poetry pywatchman

# Install Watchman
ARG WATCHMAN_VERSION
COPY --from=watchman /usr/local/bin/watchman* /usr/local/bin/
COPY --from=watchman /usr/local/share/doc/watchman-$WATCHMAN_VERSION /usr/local/share/doc/watchman-$WATCHMAN_VERSION
COPY --from=watchman /usr/local/var/run/watchman /usr/local/var/run/watchman

COPY ./ /app

WORKDIR /app
RUN poetry config virtualenvs.create false
RUN poetry install



