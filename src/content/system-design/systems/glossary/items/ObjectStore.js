function ObjectStore() {
  return (
    <div className="section-sub-content">
      <div>
        Object storage is one of the most recent storage systems. It was created
        in the cloud computing industry with the requirement of storing vast
        amounts of unstructured data. It is a flat structure in which files are
        broken into pieces and spread out among hardware. In object storage, the
        data is broken into discrete units called objects and is kept in a
        single repository, instead of being kept as files in folders or as
        blocks on servers.
      </div>
      <div>
        Object storage volumes work as modular units: each is a self-contained
        repository that owns:
      </div>
      <ol>
        <li>the data: images, videos, websites backups</li>
        <li>
          a unique identifier (UID) that allows the object to be found over a
          distributed system
        </li>
        <li>
          the metadata that describes the data: authors of the file, permissions
          set on the files, date on which it was created. The metadata is
          entirely customizable
        </li>
      </ol>
      <div>
        To retrieve the data, the storage operating system uses the metadata and
        identifiers, which distributes the load better and lets administrators
        apply policies that perform more robust searches.
      </div>
    </div>
  );
}

export default ObjectStore;
